import React from "react"
import styled from "styled-components"

import {
  FRAMERATE,
  STARCOUNT,
  RADIUS,
  FOV,
  ANGLE,
  VERT,
  CRUISE,
} from "./constants"

export class Star {
  ctx: CanvasRenderingContext2D
  x: number
  y: number
  z: number
  windowWidth: number
  windowHeight: number
  color: number[] = [167, 180, 224]

  constructor(ctx: CanvasRenderingContext2D, star: Partial<Star> = {}) {
    this.ctx = ctx
    this.x = Math.random() * (2 * RADIUS) - RADIUS
    this.y = Math.random() * (2 * RADIUS) - RADIUS
    this.z = Math.random() * (2 * RADIUS) - RADIUS
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight * 1.6
    if (star.hasOwnProperty("color")) {
      this.color = star.color
    }
  }

  draw() {
    this.ctx.beginPath()
    let fovRatio = FOV / 2 / (FOV + this.z)
    let newX = this.x * fovRatio + this.windowWidth / 2
    let newY = this.y * fovRatio + this.windowHeight / 2
    let alpha = Math.min(Math.max(Math.abs(fovRatio), 0.1), 1)
    this.ctx.arc(newX, newY, Math.min(Math.abs(fovRatio), 3), 0, 360)
    this.ctx.fillStyle = `rgba(167,180,224,${alpha})`
    this.ctx.fill()
  }

  resetCoordinate(coord: number): number {
    if (coord < -RADIUS) {
      coord = RADIUS
    } else if (coord > RADIUS) {
      coord = -RADIUS // NEGATED radius.
    }
    return coord
  }

  move() {
    let cosineAngle = Math.cos(ANGLE)
    let sineAngle = Math.sin(ANGLE)
    let cosineVert = Math.cos(VERT)
    let sineVert = Math.sin(VERT)

    let oldX = this.x
    let oldY = this.y
    var newZ = this.z + FOV
    var newX = oldX * cosineAngle + newZ * sineAngle
    var newY = oldY * cosineVert + newZ * sineVert
    var n = oldY * -sineVert + newZ * cosineVert - CRUISE

    this.x = this.resetCoordinate(newX)
    this.y = this.resetCoordinate(newY)
    this.z = this.resetCoordinate(n) - FOV
  }
}

function generateStars(
  offsetWidth: number,
  ctx: CanvasRenderingContext2D,
  color: number[] = []
): Star[] {
  let stars: Star[] = []
  let numStars = Math.min(STARCOUNT, Math.round(2 * offsetWidth))
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star(ctx, { color }))
  }
  return stars
}

function renderStars(stars: Star[]) {
  for (var i = 0; i < stars.length; i++) {
    stars[i].move()
    stars[i].draw()
  }
}

interface StarfieldProps {
  zIndex: number
}

const StarfieldWrapper = styled.div<StarfieldProps>`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: ${(props) => props.zIndex};
`

const StyledCanvas = styled.canvas`
  position: fixed;
  z-index: 1000;
  height: 100%;
  width: 100%;
`

const Starfield: React.FC<StarfieldProps> = ({ zIndex = -1000 }) => {
  let stars: Star[] = []
  let canvasRef = React.useRef<HTMLCanvasElement>()
  let ctx: CanvasRenderingContext2D

  function handleResize(canvas: HTMLCanvasElement) {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    // Clear everything within old canvas size.
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

    stars.length = 0 // Clears all references.
    stars = generateStars(canvas.offsetWidth, ctx)
    renderStars(stars)
  }

  React.useEffect(() => {
    let canvas: HTMLCanvasElement = canvasRef.current
    ctx = canvas.getContext("2d")
    // update canvas width/height to full screen
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    stars = generateStars(canvas.offsetWidth, ctx)
    renderStars(stars)

    // Render a new stars per frame
    let frame: number
    function step() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      renderStars(stars)

      setTimeout(function () {
        frame = requestAnimationFrame(step)
      }, FRAMERATE)
    }

    let resize = () => handleResize(canvas)
    window.requestAnimationFrame(step)
    window.addEventListener("resize", resize)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <StarfieldWrapper zIndex={zIndex}>
      <StyledCanvas ref={canvasRef}></StyledCanvas>
    </StarfieldWrapper>
  )
}

export default Starfield
