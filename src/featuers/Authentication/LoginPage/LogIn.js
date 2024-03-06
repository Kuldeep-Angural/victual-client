import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Divider } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { ROUTE } from '../../../config/constants'
import { isGoogleLogin, login } from '../authSlice'
import { addDelay } from '../../../utils/utils'

const LogIn = () => {
	const [isRender, setIsRender] = React.useState(false)
	const dispatch = useDispatch()

	const handleSubmit = event => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		const user = {
			email: data.get('email'),
			password: data.get('password'),
		}

		if (user.email && user.password) {
			dispatch(login(user)).then(resp => {
				window.location.href = ROUTE.base
			})
		}
	}

	const loginUsingGoogle = () => {
		window.open(
			process.env.REACT_APP_API_END_POINT_LOCAL + '/auth/google/callback',
			'_self',
		)
		setIsRender(true)
	}

	React.useEffect(() => {
		if (isRender) {
			dispatch(isGoogleLogin()).then(resp => {
				console.log(resp)
			})
		}
	}, [isRender])

	return (
		<>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						login
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='new-password'
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Divider>or via continue with </Divider>

						<Grid display={'flex'} justifyContent='space-between'>
							<Button
								type='submit'
								fullWidthvariant='contained'
								sx={{ mb: 2, ml: 1 }}
								onClick={loginUsingGoogle}
							>
								Google
							</Button>

							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mb: 2, ml: 1 }}
							>
								faceBook
							</Button>
						</Grid>
						<Grid container justifyContent='flex-end'>
							<Grid item>
								<Link href={ROUTE.register} variant='body2'>
									dont have an account? register
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</>
	)
}

export default LogIn
