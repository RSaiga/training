import React from 'react';
import { ChangeEvent, useState } from 'react'
import { Proposal } from '../../model/proposal/proposal'
import { ProposalService } from '../../services/proposal/proposalService'

export const ProposalRegisterPage = () => {
  const initialProposalState = {
    title: '',
    subTitle: '',
  }
  const [proposal, setProposal] = useState<Proposal>(initialProposalState)
  const [message, setMessage] = useState<string>(String(''))
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setProposal({ ...proposal, [name]: value })
  }
  const save = () => {
    const data = {
      title: proposal.title,
      subTitle: proposal.subTitle,
    }

    ProposalService.create(data)
      .then((response: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setMessage(String(response.data.messages[0]))
      })
      .catch((e: Error) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setMessage(String(e.response.data.messages[0].field) + String(e.response.data.messages[0].message))
        console.log(e.message)
      })
  }

  return (
    <>
      <div>
        <label htmlFor="title">タイトル</label>
        <input type="text" id="title" required value={proposal.title} onChange={handleInputChange} name="title" />
      </div>
      <div>
        <label htmlFor="sub-title">サブタイトル</label>
        <input
          type="text"
          id="subTitle"
          required
          value={proposal.subTitle}
          onChange={handleInputChange}
          name="subTitle"
        />
      </div>
      <div>
        <label htmlFor="message" id="message" color="red">
          {message}
        </label>
      </div>
      <div>
        <button type="submit" onClick={save} id="register">
          Submit
        </button>
      </div>
    </>
  )
};
