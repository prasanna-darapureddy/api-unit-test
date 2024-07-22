import { Box, CircularProgress, Paper, Typography } from '@mui/material'
import { Component } from 'react'
import { styles } from './Styles';

interface IState {
  usersList: {
    id: number;
    firstName: string
    lastName: string
    age: number
    gender: string
    email: string
  }[],
  errorMsg: string
  loading: boolean
}

class APICall extends Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = { usersList: [], errorMsg: '', loading: false, }
  }

  getUsersData = async () => {
    this.setState({ loading: true })
    const url = 'https://dummyjson.com/users'
    const options = { method: 'GET' }
    try {
      const response = await fetch(url, options)
      console.log(response, 'response')
      if (response.status === 200) {
        const data = await response.json()
        console.log(data, 'data======>>>>>>')
        this.setState({ usersList: data.users, loading: false, })
      } else {
        this.setState({ usersList: [], errorMsg: 'Not Found', loading: false })
      }
    } catch (error) {
      this.setState({ errorMsg: 'Somthing went wrong...', loading: false })
    }
  }

  componentDidMount(): void {
    this.getUsersData()
  }

  render() {
    const { usersList, loading, errorMsg } = this.state
    console.log(usersList, 'list')
    return (
      <>
        {loading &&
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
            <CircularProgress color='success' />
          </Box>
        }

        {usersList.length > 0 &&
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Typography variant='h1' data-testid='usersHeading'>Users</Typography>
            <Box component={'ol'} display={'flex'} flexDirection={'column'} gap={3} data-testid='usersList'>
              {usersList?.map(eachUser => (
                <Paper component={'li'} key={eachUser.id} sx={styles.listItem}>
                  <Typography textTransform={'capitalize'}>Name : {eachUser.firstName} {eachUser.lastName}</Typography>
                  <Typography>Email : {eachUser.email}</Typography>
                  <Typography textTransform={'capitalize'}>Gender : {eachUser.gender}</Typography>
                  <Typography>Age : {eachUser.age}</Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        }

        {errorMsg &&
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'100vh'}>
            <Typography variant='h4'>{errorMsg}</Typography>
          </Box>
        }
      </>
    )
  }
}
export default APICall



