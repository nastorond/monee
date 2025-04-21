"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

interface AuthProps {
  setIsLogined: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Auth({ setIsLogined }: AuthProps) {
  const [mode, setMode] = useState<"signup" | "login">("signup"); // 회원가입 or 로그인

  return (
    <div className="w-screen h-screen bg-[#F8FAFC] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 border border-[#D9D9D9] px-15 pt-15 pb-20 bg-[#FFFFFF] rounded-xl">
        <div className="flex flex-row gap-4">
        <img src="logo/figgy_nukki.png" alt="logo_piggy"className="w-15 mb-4"/>
        <img src="logo/logo_nukki.png" alt="logo" className="w-40 mb-4" />
        </div>
          {/* 회원가입 */}
          {mode === "signup" && (
          <div className="py-10">
            <p className="text-base font-semibold text-gray-700 mb-3 text-center">회원가입하기</p>
            <button className={styles["gsi-material-button"]} onClick={() => setIsLogined(true)}>
            <div className={styles["gsi-material-button-state"]}></div>
            <div className={styles["gsi-material-button-content-wrapper"]}>
              <div className={styles["gsi-material-button-icon"]}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{display: "block"}}>
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
              </div>
              <span className={styles["gsi-material-button-contents"]}>Sign up with Google</span>
              <span style={{display: "none"}}>Sign up with Google</span>
            </div>
            </button>
          </div>
          )}

          {/* 로그인 */}
          {mode === "login" && (
          <div className="py-10">
            <p className="text-base font-semibold text-gray-700 mb-3 text-center">로그인하기</p>
          <button className={styles["gsi-material-button"]} onClick={() => setIsLogined(true)}>
          <div className={styles["gsi-material-button-state"]}></div>
          <div className={styles["gsi-material-button-content-wrapper"]}>
            <div className={styles["gsi-material-button-icon"]}>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{display: "block"}}>
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            </div>
            <span className={styles["gsi-material-button-contents"]}>Continue with Google</span>
            <span style={{display: "none"}}>Continue with Google</span>
          </div>
          </button>
          </div>
          )}

          {/* 모드 전환 버튼 */}
          <div className="mt-4 text-sm text-gray-600">
          {mode === "signup" ? (
            <div className="mt-4 text-sm text-gray-600 flex flex-row gap-3 items-center">
              <p>이미 계정이 있으신가요? </p>
              <button
                onClick={() => setMode("login")}
                className="text-blue-500 hover:underline"
              >
                로그인하기
              </button>
            </div>
          ) : (
            <div className="mt-4 text-sm text-gray-600 flex flex-row gap-3 items-center">
              <p>처음이신가요? </p>
              <button
                onClick={() => setMode("signup")}
                className="text-blue-500 hover:underline"
              >
                회원가입하기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
