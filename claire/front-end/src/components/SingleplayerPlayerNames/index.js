import React from 'react'
import _ from 'lodash'
import { Formik, Field } from 'formik'
import MenuContainer from '../MenuContainer'
import initialValues from './lib/initialValues'
import styles from './index.module.css'
import Button from '../Button'

export default ({
  match: {
    params: {
      playersCount,
    },
  },
}) => (
  <MenuContainer>
    <Formik
      initialValues={initialValues(playersCount)}

        onSubmit={(variables) => (
            console.log('Form submitted with:', variables)  )}>

      {({ values: { players }, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          {_.map(players, ({ number }, index) => (
            <div key={index}>
              <Field
                name={`players.${index}.name`}
                placeholder={`Player ${index + 1} name`}
                        <Button component='button' type='submit'>
            Start game
          </Button>

              />
            </div>
          ))}
        </form>
      )}
    </Formik>
  </MenuContainer>
)

Create src/components/SingleplayerPlayerNames/lib/initialValues.js

import _ from 'lodash'

export default (playersCount) => ({
  // create an array of players with initial names
  players: _.map(_.times(playersCount), (n) => ({
    name: `Player ${n + 1}`,
  })),
})
