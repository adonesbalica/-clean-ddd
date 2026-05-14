import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'
import { FetchRecentQuestionsUseCase } from './fetch-recent-questions'
import { makeQuestion } from 'test/factories/make-question'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: FetchRecentQuestionsUseCase

describe('Fetch Recent Questions', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new FetchRecentQuestionsUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to fetch recentes questions', async () => {
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2026, 4, 2) })
    )
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2026, 4, 1) })
    )
    await inMemoryQuestionsRepository.create(
      makeQuestion({ createdAt: new Date(2026, 4, 3) })
    )

    const result = await sut.execute({
      page: 1,
    })

    expect(result.value?.questions).toEqual([
      expect.objectContaining({ createdAt: new Date(2026, 4, 3) }),
      expect.objectContaining({ createdAt: new Date(2026, 4, 2) }),
      expect.objectContaining({ createdAt: new Date(2026, 4, 1) }),
    ])
  })

  it('should be able to fetch paginated recentes questions', async () => {
    for (let i = 1; i <= 22; i++) {
      await inMemoryQuestionsRepository.create(makeQuestion())
    }

    const result = await sut.execute({
      page: 2,
    })

    expect(result.value?.questions).toHaveLength(2)
  })
})
