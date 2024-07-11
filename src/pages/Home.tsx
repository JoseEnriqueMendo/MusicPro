import { useEffect, useState } from 'react';
import tokenServices from '../apis/token';
const Home = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const { access_token } = await tokenServices.getToken();
        setToken(access_token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  return (
    <>
      <main className="min-h-[90vh] bg-slate-400">{token}</main>
    </>
  );
};

export default Home;
