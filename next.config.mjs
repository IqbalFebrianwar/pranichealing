/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return [
            {
                source: '/dashboard',
                destination: "/",
                permanent: false
            }
        ]
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dt9lwenxb/image/upload/**',
          },
        ],
      },
};

export default nextConfig;
