import React from "react"
import { graphql } from "gatsby"
import { useForm } from "react-hook-form"
import styled from "styled-components"

import Layout from "../components/Layout"
import { ContactTemplateQueryResult } from "../types"

const ContactTemplate: React.FC<{ data: ContactTemplateQueryResult["data"] }> =
  ({ data }) => {
    const { html, frontmatter } = data.markdownRemark

    return (
      <Layout title={frontmatter.title}>
        <ContactWrapper>
          <ContactCopy dangerouslySetInnerHTML={{ __html: html }} />
          <ContactForm />
        </ContactWrapper>
      </Layout>
    )
  }

export default ContactTemplate

const ContactForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm()

  return (
    <FormWrapper>
      <FormGroup>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        {errors && errors.name && (
          <FormErrorMessage>{errors.name.message}</FormErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          {...register("email", {
            required: "Email is required.",
            pattern: {
              message: "Email is not valid.",
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            },
          })}
        />
        {errors && errors.email && (
          <FormErrorMessage>{errors.email.message}</FormErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          {...register("message", {
            required: "Message is required",
          })}
        />
        {errors && errors.message && (
          <FormErrorMessage>{errors.message.message}</FormErrorMessage>
        )}
      </FormGroup>

      <FormFeedbackWrapper>
        {/* TODO: Feedback after form submission. (from response) */}
      </FormFeedbackWrapper>

      <FormButton type="submit">Send Message</FormButton>
    </FormWrapper>
  )
}

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-around;
  margin-top: 1rem;
  padding-bottom: 1rem;

  & > * {
    flex: 1;
  }

  @media screen and (max-width: 1000px) {
    & {
      flex-direction: column;
      justify-content: flex-start;
    }

    & > * {
      margin-top: 2rem;
      flex: 0;
      width: 100%;
    }
  }
`

const ContactCopy = styled.div`
  max-width: 45ch;

  & p {
    font-size: var(--size-400);
  }
`

const FormWrapper = styled.div`
  max-width: 45ch;
  padding: 1rem;
  padding-top: 0;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  font-family: inherit;

  & label {
    margin-top: 1rem;
    text-transform: capitalize;
    font-size: var(--size-400);
  }

  & input,
  textarea {
    resize: vertical;
    font-size: var(--size-400);
    font-family: inherit;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    background-color: #e4b8c7;
    border: 2px solid transparent;
  }

  & textarea:focus,
  input:focus {
    outline: none;
    border: 2px solid #80576e;
  }
`

const FormErrorMessage = styled.span`
  color: red;
  font-size: var(--size-300);
  opacity: 0.7;
`

const FormFeedbackWrapper = styled.div`
  margin-top: 1rem;
  text-transform: uppercase;
  font-size: var(--size-300);
`

const FormButton = styled.button`
  margin-top: 1rem;
  padding: 0.45rem;
  padding-left: 1.25rem;
  padding-right: 1.5rem;
  background-color: #37292c;
  color: #fafafa;
  border: 1px solid rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  border-radius: 4px;
`

export const pageQuery = graphql`
  query ContactTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
