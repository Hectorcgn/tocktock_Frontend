export const getPost = async (postId, setState) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/postdetail/${postId}`, {
    credentials: 'include',
  })
  if (response.ok) {
    const data = await response.json()
    setState(data)
    console.log(data)
  }
}

export const writeComment = async (event, postId) => {
  const form = new FormData(event.target)
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/postdetail/${postId}`, {
    credentials: 'include',
    method: 'POST',
    body: form,
  })
}