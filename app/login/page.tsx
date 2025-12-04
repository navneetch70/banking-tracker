"use client";

import { useUser } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import VStack from "../components/ui/VStack";
import HStack from "../components/ui/HStack";

import { Button, Heading, Text, TextField, Link, Divider } from "@vibe/core";
import Header from "../components/ui/Header";

export default function LoginPage() {
  const { user, login } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) router.push("/home");
  }, [user, router]);

  const handleLogin = () => {
    login({ name: "Demo User", email });
    setLoading(true);
    // router.push("/home");
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
      <Header />

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
            padding: "8px",
            fontSize: "40px",
            fontWeight: "400",
          }}
        >
          <b>Log</b> In
        </Heading>

        {/* Your email address */}
        <VStack
          style={{
            gap: "6px",
            marginTop: "28px",
          }}
        >
          <Text
            style={{ fontSize: "14px", fontWeight: "400", color: "#323338" }}
          >
            Your email address
          </Text>
          <TextField
            value={email}
            placeholder="name@company.com"
            onChange={(value: string) => setEmail(value)}
            size="large"
          />
        </VStack>

        {/* Enter password */}
        <VStack
          style={{
            gap: "6px",
          }}
        >
          <Text
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "#323338",
              marginTop: "12px",
            }}
          >
            Enter password
          </Text>
          <TextField
            type="password"
            value={password}
            placeholder="Password"
            onChange={(value: string) => setPassword(value)}
            size="large"
          />
        </VStack>

        {/* Forgot password link */}
        <VStack
          style={{
            marginTop: "4px",
          }}
        >
          <Link
            href="#"
            text="Forgot your password?"
            style={{ fontWeight: "400", fontSize: "14px" }}
          />
        </VStack>

        {/* Log in button */}
        <Button
          size="large"
          kind="primary"
          ariaLabel="Log in"
          onClick={handleLogin}
          loading={loading}
          id="loading-state-button"
        >
          Log in &nbsp; →
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
          <Link
            href="#"
            text="Login to another account"
            style={{ fontWeight: "400", fontSize: "14px" }}
          />

          <HStack
            style={{
              gap: "4px",
            }}
          >
            <Text>Can&apos;t log in?</Text>
            <Link
              href="#"
              text="Visit our help center"
              style={{ fontWeight: "400", fontSize: "14px" }}
            />
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
}
