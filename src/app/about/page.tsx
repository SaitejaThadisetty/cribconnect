export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-2xl p-8 bg-white rounded-lg shadow-md mt-16">
        <h1 className="text-3xl font-bold text-[#A60000] font-montserrat mb-4">About UCM CribConnect</h1>
        <p className="text-gray-700 mb-4">
          UCM CribConnect is a platform designed to help students find housing and roommates with ease. Our mission is to make your search for a home at UCM simple, safe, and effective.
        </p>
        <p className="text-gray-700 mb-4">
          Browse listings, connect with potential roommates, and manage your profile all in one place. Whether you’re looking for a room or a roommate, CribConnect is here to help you every step of the way.
        </p>
        <p className="text-gray-700">
          Have questions? Contact us at <a href="mailto:support@cribconnect.com" className="text-[#A60000] underline">support@cribconnect.com</a>.
        </p>
      </div>
    </div>
  );
}
