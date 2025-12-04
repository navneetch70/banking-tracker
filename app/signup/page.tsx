"use client";

import { useUser } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import VStack from "../components/ui/VStack";
import HStack from "../components/ui/HStack";

import { Button, Heading, Text, TextField, Link, Divider } from "@vibe/core";

export default function LoginPage() {
  const { user, login } = useUser();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) router.push("/home");
  }, [user, router]);

  const handleLogin = () => {
    login({ name: "Demo User", email });
    router.push("/home");
  };

  return (
    <VStack
      width="100%"
      height="100vh"
      style={{
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
      justify="center"
    >
      <VStack
        style={{
          width: "420px",
          alignItems: "stretch",
          gap: "16px",
        }}
      >
        {/* Heading */}
        <Heading
          style={{
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          Log in to your account
        </Heading>

        {/* Your email address */}
        <VStack
          style={{
            gap: "6px",
          }}
        >
          <Text>Enter your work email address</Text>
          <TextField
            value={email}
            placeholder="name@company.com"
            onChange={(value: string) => setEmail(value)}
          />
        </VStack>

        {/* Forgot password link */}
        <VStack
          style={{
            marginTop: "4px",
            marginBottom: "8px",
          }}
        >
          <Link href="#" text="Forgot your password?" />
        </VStack>

        {/* Log in button */}
        <Button
          size="large"
          kind="primary"
          ariaLabel="Log in"
          onClick={handleLogin}
        >
          Next &nbsp; →
        </Button>

        {/* Divider */}
        <Divider
        //   style={{
        //     marginTop: "32px",
        //     marginBottom: "16px",
        //   }}
        />

        <VStack
          style={{
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Link href="#" text="Login to another account" />

          <HStack
            style={{
              gap: "4px",
            }}
          >
            <Text>Dont't have an account yet?&apos; Sign Up</Text>
            <Text>Can&apos;t log in?</Text>
            <Link href="#" text="Visit our help center" />
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
}
