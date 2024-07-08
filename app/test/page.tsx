import { sendEmail } from '@/actions/sendEmail'

const page = () => {
  return (
    <form
      className="mt-10 flex flex-col"
      action={sendEmail}
    >
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send Email
      </button>
    </form>
  )
}

export default page