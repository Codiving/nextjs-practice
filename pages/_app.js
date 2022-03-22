import Link from "next/link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">홈</Link>
        </li>
        <li>
          <Link href="/intro">소개</Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
