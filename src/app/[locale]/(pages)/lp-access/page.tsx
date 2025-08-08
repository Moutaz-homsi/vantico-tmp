"use client"
import { LogIn } from "@/utils/api"
import { Button, Image, Input } from "@/components/ui"
import { IconApple, IconGoogle, IconMicrosoft } from "@/components/icons"
import { useState } from "react"
import { toast } from "react-toastify"

export default function LpAccess() {
	const [values, setValues] = useState({ identifier: "", password: "", remreberMe: false })

	async function handleSubmit(e: any) {
		e.preventDefault()
		const res = await LogIn({ body: values })
		console.log("res: ", res)

		if (res?.user?.id && !res?.error) {
			toast.success("Logged in successfuly")
		} else if (typeof res?.error == "string") {
			toast.error(res.error)
		} else if (res?.error) {
			toast.error("An error o-ccourd please try again")
		}
	}

	return (
		<div className="relative w-full h-[calc(100vh-64px)] min-h-[500px]">
			<div className="h-full w-full absolute top-0 left-0">
				<Image isFill alt="LB access Background" src="/images/login-bg.jpg" className="object-cover" />
			</div>
			<div className="bg-black/20 absolute inset-0"></div>
			<form
				onSubmit={handleSubmit}
				className="bg-white px-6 py-8 rounded-md w-[calc(100%-32px)] md:mx-0 md:w-md absolute top-1/2 left-1/2 -translate-1/2 space-y-4"
			>
				<h2 className="mb-6 text-2xl font-semibold text-center">Welcome to Vantico</h2>
				<Input
					placeholder="Username or Email"
					value={values.identifier}
					onChange={(e) => setValues({ ...values, identifier: e.target.value })}
				/>
				<Input
					placeholder="Password"
					type="password"
					value={values.password}
					onChange={(e) => setValues({ ...values, password: e.target.value })}
				/>
				<div className="flex items-center justify-start gap-2">
					<input type="checkbox" id="remember_me" checked={values.remreberMe} onChange={e=> setValues({...values, remreberMe: e.target.checked})} />
					<label htmlFor="remember_me">Remember me</label>
				</div>
				<div className="flex items-center justify-between my-6">
					<Button variant="dark" type="submit">
						Login
					</Button>
					<div className="flex-1 text-center">Or Continue with</div>{" "}
				</div>
				{/*  justify-evenly */}
				<div className="flex items-center justify-between gap-2">
					<LoginWithContainer>
						<IconApple className="w-5 h-5" />
						<span className="hidden md:block">Apple</span>
					</LoginWithContainer>
					<LoginWithContainer>
						<IconGoogle className="w-5 h-5" /> <span className="hidden md:block">Google</span>
					</LoginWithContainer>
					<LoginWithContainer>
						<IconMicrosoft className="w-5 h-5" /> <span className="hidden md:block">Microsoft</span>
					</LoginWithContainer>
				</div>
			</form>
		</div>
	)
}

function LoginWithContainer({ children, onClick }: any) {
	return (
		<div
			onClick={onClick}
			// w-[38px] h-[38px]
			className="border rounded border-black/50 p-2.5 h-10.5 w-[122px] gap-2 flex items-center justify-center cursor-pointer hover:bg-gray-400/10"
		>
			{children}
		</div>
	)
}
