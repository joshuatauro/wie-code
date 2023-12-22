import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {  signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
const provider = new GoogleAuthProvider();


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"



// icons
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center '>
        <Card className="w-1/3 rounded-lg mx-auto">
            <CardHeader className="">
                <CardTitle className="text-xl">Login</CardTitle>
                <CardDescription>Choose the user type and proceed</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="visitor" className="w-full">
                    <TabsList className="w-full mb-10 ">
                        <TabsTrigger value="visitor">Visitor</TabsTrigger>
                        <TabsTrigger value="court">Court</TabsTrigger>
                        <TabsTrigger value="advocate">Advocate</TabsTrigger>
                        <TabsTrigger value="party">Party</TabsTrigger>
                    </TabsList>
                    <TabsContent value="visitor"><VisitorLogin /></TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    </div>
  )
}


const VisitorLogin = () => {

    const googleSignIn = async() => {

        signInWithPopup(auth, provider)
        .then(res => {
            const user = res.user
            console.log(user)
        })
    }

    const emailSignIn = async() => {
        signInWithEmailAndPassword(auth, email, password)
    }

    return(
            <div  className="">
                <div className=" ">
                    <Label htmlFor="email" className=" font-semibold">Email</Label>
                    <Input type="email" id="email" className="py-5 mt-1 " placeholder="Email"  />
                </div>
                <div className="my-3">
                    <Label htmlFor="email" className=" font-semibold">Password</Label>
                    <Input type="email" id="email" className="py-5 mt-1 " placeholder="Email"  />
                </div>
                <Button className="w-full">Submit</Button>
                <p className='my-2 text-center text-sm text-gray-500'>or</p>
                <Button onClick={googleSignIn} className="w-full border-slate-500 border bg-transparent text-black"><FcGoogle className='mr-1.5'/>Login with Google</Button>
            </div>
    )
}

export default Login