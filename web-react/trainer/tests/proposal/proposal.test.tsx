// @ts-ignore
import React from 'react';
import { render, screen } from '@testing-library/react'
import { ProposalRegisterPage } from '../../src/app/pages/proposal'

describe('Proposal', () => {
  it('should work as expected', () => {
    render(<ProposalRegisterPage />)
    expect(screen.getByText('タイトル')).toBeInTheDocument()
  })
})
