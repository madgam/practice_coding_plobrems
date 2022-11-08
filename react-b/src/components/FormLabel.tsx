import { useStyles } from 'src/hooks/useStyles'

export interface FormLabelSchema {
  label: string
}

const FormLabel = (props: FormLabelSchema) => {
  const classes = useStyles()
  return (
    <div className={classes.mr10}>
      <span>{props.label}</span>
    </div>
  )
}

export default FormLabel
