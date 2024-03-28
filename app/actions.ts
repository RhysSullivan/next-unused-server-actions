"use server"

export async function getAllUsersPrivateDoNotLeak() {
    console.log("Running private action getAllUsersPrivateDoNotLeak")
  return [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Adam",
    },
  ];
}

export async function getSignedInUser(){
    console.log("Running public action getSignedInUser")
    return {
        id: 1,
        name: "John Doe",
    }
}