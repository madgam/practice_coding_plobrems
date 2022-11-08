/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, MenuItem, Select, TextField } from '@mui/material'
import { useState } from 'react'
import ErrorMessage from 'src/components/ErrorMessage'
import FormLabel from 'src/components/FormLabel'
import StudyList, { StudySchema } from 'src/components/StudyList'
import useI18n from 'src/hooks/useI18n'
import { useStyles } from 'src/hooks/useStyles'

type SubjectSchema = {
  key: number
  label: string
}

type FormValue = {
  key: number
  time: number
}

export const SUBJECTS: SubjectSchema[] = [
  { key: 0, label: '国語' },
  { key: 1, label: '数学' },
  { key: 2, label: '理科' },
  { key: 3, label: '社会' },
  { key: 4, label: '英語' },
]

const defaultFormValue: FormValue = { key: 0, time: 0 }

const App = () => {
  const [studies, setStudies] = useState<StudySchema[]>([])
  const [time, setTime] = useState<number>(0)
  const [formValue, setFormValue] = useState<FormValue>(defaultFormValue)
  const [hasError, setHasError] = useState<boolean>(false)
  const classes = useStyles()
  const t = useI18n()

  const isValid = () => {
    return formValue.time > 0
  }
  const handleSelect = (event: any) => {
    setFormValue({ key: event.target.value, time: formValue.time })
  }
  const handleInput = (event: any) => {
    setFormValue({ key: formValue.key, time: Number(event.target.value) })
    if (hasError && event.target.value > 0) setHasError(false)
  }
  const handleSubmit = () => {
    if (!isValid()) {
      setHasError(true)
      return
    }
    setStudies([
      ...studies,
      { name: SUBJECTS[formValue.key].label, time: formValue.time },
    ])
    setTime(time + Number(formValue.time))
    setFormValue(defaultFormValue)
    setHasError(false)
  }

  return (
    <div className={`${classes.common} ${classes.m_auto}`}>
      <div
        className={`${classes.jc_center} ${classes.ai_center} ${classes.flex}`}
      >
        {/* 科目 */}
        <div
          className={`${classes.ai_center} ${classes.flex} ${classes.m0_10}`}
        >
          <FormLabel label={t.SUBJECTS} />
          <Select
            className={classes.select}
            value={formValue.key}
            onChange={handleSelect}
            size={'small'}
          >
            {SUBJECTS.map((item, i) => (
              <MenuItem value={item.key} key={i}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </div>

        {/* 勉強時間(分) */}
        <div
          className={`${classes.ai_center} ${classes.flex} ${classes.m0_10}`}
        >
          <FormLabel label={t.STUDY_TIME} />
          <div>
            <TextField
              className={classes.textarea}
              variant={'outlined'}
              id={'outlined-error'}
              type={'number'}
              value={formValue.time}
              onChange={handleInput}
              onKeyPress={(e) => {
                // キーボードのEnterで登録を発火させる
                if (e.key === 'Enter') {
                  handleSubmit()
                }
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: hasError ? '#f00' : '#ccc',
                    borderWidth: hasError ? 3 : 1,
                  },
                },
              }}
              size={'small'}
            />
          </div>
        </div>

        {/* 送信ボタン */}
        <div>
          <Button type={'submit'} variant={'contained'} onClick={handleSubmit}>
            送信
          </Button>
        </div>
      </div>

      {/* エラーメッセージ */}
      {hasError && <ErrorMessage label={t.ERROR_MESSAGE} />}

      {/* 勉強合計時間 */}
      <div className={`${classes.studySum} ${classes.m20}`}>
        <span className={classes.mr10}>合計時間</span>
        <span className={classes.studySumTime}>
          {time > 59 && `${Math.floor(time / 60)}${t.TIME_HOURS}`}
          {time % 60}
          {t.TIME_MINUTES}
        </span>
      </div>

      {/* 勉強一覧 */}
      <StudyList items={studies} />
    </div>
  )
}

export default App
