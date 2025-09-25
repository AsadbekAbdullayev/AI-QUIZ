import { FC } from 'react'
import styled from 'styled-components'
import { device } from '../../../styles/BreakPoints'

import CodeSnippet from '../../ui/CodeSnippet'
import Answer from '../Answer'
import QuizImage from '../../ui/QuizImage'

const QuestionContainer = styled.div`
  margin: 30px 0 40px;
  max-width: 88%;
  @media ${device.sm} {
    max-width: 100%;
  }
`

const AnswersContainer = styled.div`
  max-width: 78%;
  @media ${device.sm} {
    max-width: 100%;
  }
`

const QuestionStyle = styled.h2`
  font-size: clamp(18px, 4vw, 28px);
  font-weight: 500;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: 1.3;
`

interface QuestionTypes {
  question: string
  code?: string
  image?: string
  type: 'single' | 'multiple'
  choices: string[]
  selectedAnswer: string[] | string
  handleAnswerSelection: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void
}

const Question: FC<QuestionTypes> = ({
  question,
  code,
  image,
  type,
  choices,
  selectedAnswer,
  handleAnswerSelection,
}) => {
  return (
    <QuestionContainer>
      <QuestionStyle>{question}</QuestionStyle>

      {code ? <CodeSnippet code={code} language="javascript" /> : null}

      {image ? <QuizImage image={image} /> : null}

      <AnswersContainer>
        {choices.map((choice, index) => (
          <Answer
            key={`${choice}-${index}`}
            choice={choice}
            index={index}
            onChange={(e) => handleAnswerSelection(e, index)}
            type={type}
            selectedAnswer={selectedAnswer}
          />
        ))}
      </AnswersContainer>
    </QuestionContainer>
  )
}

export default Question
