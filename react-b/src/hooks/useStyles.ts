import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  common: {
    width: '60%',
    margin: '0 auto',
    fontSize: 20,
  },
  flex: {
    display: 'flex',
  },
  form: {
    display: 'flex',
    margin: '20px',
    justifyContent: 'center',
  },
  select: {
    width: '200px',
  },
  textarea: {
    width: '80px',
  },

  // margin
  m10: {
    margin: '10px',
  },
  m20: {
    margin: '20px',
  },
  m0_10: {
    margin: '0px 10px',
  },
  m10_0: {
    margin: '10px 0px',
  },

  // padding
  p10: {
    padding: '10px',
  },
  p20: {
    padding: '20px',
  },
  p0_10: {
    padding: '0px 10px',
  },
  p10_0: {
    padding: '10px 0px',
  },
  p20_10: {
    padding: '20px 10px',
  },

  // form
  formLabelBlock: {
    margin: '0px 10px',
  },
  formLabel: {
    verticalAlign: '-webkit-baseline-middle',
  },

  // studySum
  studySum: {
    textAlign: 'right',
  },
  studySumTime: {
    fontSize: 28,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'gray',
  },

  // studyList
  hr: {
    margin: '10px',
    borderBottom: '2px solid #a9a9a9',
  },
  studyListItems: {
    width: '50%',
    textAlign: 'center',
  },
  studyListLabel: {
    width: '50%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#708090',
  },

  // error messages
  error: {
    color: 'red',
  },
  notchedOutline: {
    border: '1px solid red !important',
  },
})
