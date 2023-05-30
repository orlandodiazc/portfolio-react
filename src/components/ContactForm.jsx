import React, { useState } from 'react'
import axios from 'axios'

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({ name: '', email: '', message: '' })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({ name: '', email: '', message: '' })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/meqwwwpw',
      data: inputs
    })
      .then((response) => {
        handleServerResponse(true, 'Thank you, your message has been submitted.')
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <div>
      {status.info.error && <div className="text-amber-500">Error: {status.info.msg}</div>}
      {!status.info.error && status.info.msg && (
        <span className="text-green-500 font-bold border-2 border-gray-500 px-4 py-2 mb-5">
          {status.info.msg}
        </span>
      )}
      <form onSubmit={handleOnSubmit} className="grid gap-3 max-w-lg m-auto text-left my-6">
        <div className="flex flex-col items-stretch gap-1 ">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            onChange={handleOnChange}
            required
            placeholder="Pepito"
            value={inputs.name}
            className="px-3 py-2 rounded-lg border border-violet-900 outline-violet-500 text-black"
          />
        </div>
        <div className="flex flex-col items-stretch gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="_replyto"
            placeholder="example@example.com"
            onChange={handleOnChange}
            required
            value={inputs.email}
            className="px-3 py-2 rounded-lg border border-violet-900 outline-violet-500 text-black"
          />
        </div>
        <div className="flex flex-col items-stretch gap-1">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            placeholder="Write your message"
            value={inputs.message}
            className="min-h-[2.7rem] mb-5 px-3 py-2 rounded-lg border border-gray-500 outline-violet-500 text-black"
          />
        </div>

        <button
          type="submit"
          disabled={status.submitting || status.submitted}
          className="inline-flex justify-center items-center mx-auto px-5 py-3 font-bold text-gray-200 rounded-lg bg-green-800 outline outline-0 hover:outline-1 disabled:bg-gray-700 disabled:outline-0"
        >
          {!status.submitting
            ? !status.submitted
              ? 'Get In Touch'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
    </div>
  )
}
