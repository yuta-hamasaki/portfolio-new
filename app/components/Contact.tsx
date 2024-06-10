
  const Contact = () => {

    return (
      <div className=" container mx-auto py-8">
        <h1 className="text-center text-3xl font-bold mb-4">Contact Me</h1>
        <form className="w-full max-w-lg mx-auto mt-8">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
      </form>
      </div>
    )
  }

  export default Contact;