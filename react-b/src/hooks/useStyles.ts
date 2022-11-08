import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  common: {
    width: '60%',
    fontSize: 20,
    backgroundColor: '#fff',
  },
  flex: {
    display: 'flex',
  },
  form: {
    justifyContent: 'center',
  },
  select: {
    width: 200,
  },
  textarea: {
    width: 80,
  },
  ai_center: {
    alignItems: 'center',
  },
  jc_center: {
    justifyContent: 'center',
  },

  // margin
  m_auto: {
    margin: '0 auto',
  },
  m10: {
    margin: 10,
  },
  m20: {
    margin: 20,
  },
  m0_10: {
    margin: '0px 10px',
  },
  m10_0: {
    margin: '10px 0px',
  },
  ml10: {
    marginLeft: 10,
  },
  ml20: {
    marginLeft: 20,
  },
  mr10: {
    marginRight: 10,
  },
  mr20: {
    marginRight: 20,
  },

  // padding
  p5: {
    padding: 5,
  },
  p10: {
    padding: 10,
  },
  p20: {
    padding: 20,
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

  // studySum
  studySum: {
    textAlign: 'right',
  },
  studySumTime: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'gray',
  },

  // studyList
  hr: {
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
    color: '#f00',
  },
})
