import * as _ from "styled-components/cssprop"

declare global {
  /**
   * Utility type for extracting a single element type
   * for composite types such as Array<...>.
   */
  type ArrayElement<A> = A extends readonly (infer T)[] ? T : never
}
