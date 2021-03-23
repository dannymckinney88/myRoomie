import React from 'react'
import * as FirestoreService from "../firebase";
export default function Profile() {
    console.log(FirestoreService.auth.currentUser.uid)
    return (
        <div>
            Welcome to your Profile
        </div>
    )
}
