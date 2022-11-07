import useI18n from 'src/hooks/useI18n'
import { useStyles } from 'src/hooks/useStyles'

export interface StudySchema {
  name: string
  time: number
}

export interface StudyListSchema {
  items: StudySchema[]
}

const StudyList = (props: StudyListSchema) => {
  const classes = useStyles()
  const t = useI18n()
  return (
    <div>
      <div className={`${classes.flex} ${classes.m10}`}>
        <span className={classes.studyListLabel}>{t.SUBJECTS}</span>
        <span className={classes.studyListLabel}>{t.STUDY_TIME}</span>
      </div>
      <div className={classes.hr} />
      {props.items.map((study, i) => {
        return (
          <div key={i}>
            {i > 0 && <div className={classes.hr} />}
            <div className={`${classes.flex} ${classes.m10}`}>
              <span className={classes.studyListItems}>{study.name}</span>
              <span className={classes.studyListItems}>
                {study.time}
                {t.TIME_MINUTES}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StudyList
