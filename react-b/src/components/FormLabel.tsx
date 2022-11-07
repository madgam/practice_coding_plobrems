import { useStyles } from 'src/hooks/useStyles'

export interface FormLabelSchema {
  label: string
}

const FormLabel = (props: FormLabelSchema) => {
  const classes = useStyles()
  return (
    <div className={classes.formLabelBlock}>
      <span className={classes.formLabel}>{props.label}</span>
    </div>
  )
}

export default FormLabel
