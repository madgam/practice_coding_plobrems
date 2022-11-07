import { useStyles } from 'src/hooks/useStyles'

export interface ErrorMessageSchema {
  label: string
}

const ErrorMessage = (props: ErrorMessageSchema) => {
  const classes = useStyles()
  return (
    <div>
      <span className={classes.error}>{props.label}</span>
    </div>
  )
}

export default ErrorMessage
