/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BACKEND_API: process.env.NEXT_PUBLIC_BACKEND_API,
        FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL
    }
};

export default nextConfig;
