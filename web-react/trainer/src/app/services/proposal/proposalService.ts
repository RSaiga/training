import { http } from '../../shared/http'
import { Proposal } from '../../model/proposal/proposal'

const create = (data: Proposal) => http.post<Proposal>('/proposal', data)

export const ProposalService = {
  create,
}
