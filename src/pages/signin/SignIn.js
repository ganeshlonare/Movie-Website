const SignInPage = () => {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-black">
        <h2 className="text-3xl text-black text-center font-semibold mb-4">Sign In</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" className="w-full border rounded-md py-2 px-3 mt-1" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" id="password" className="w-full border rounded-md py-2 px-3 mt-1" />
        </div>
        <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300">Sign In</button>
      </div>
    </div>
  );
}

export default SignInPage;
