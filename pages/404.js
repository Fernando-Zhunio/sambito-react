import { Link, Ripple } from "../ui";
import Image from 'next/image';
import { Logo } from "../ui/logo";


const NotFound = () => (
  <div className="flex flex-col justify-center items-center min-h-screen w-full text-center">
    {/* <Logo height={50} width={50} /> */}
    <Image src="/assets/img/califi-logo.svg" alt="404" width={500} height="auto" />
    <div className="w-full">
      <Image src="/images/illustrations/undraw_filing_system_b5d2.svg" alt="Vercel Logo" width={300} height={300} className="inline-block" />
      <h1
        className={`c-primary text-4xl mb-0 font-bold leading-none uppercase`}
      >
        Error 404
      </h1>
      <h6 className="mt-0 mb-2">Sorry! 404 </h6>      
      <Link href="/" as={``}>
        <a className="btn btn-primary btn-custom btn-lg shadow-md">
        Regresar a página Principal
          <Ripple />
        </a>
      </Link>
    </div>

    {/* <div className="text-center mb-5 text-indigo-500">
      <Image src="/SAMBITO.png" alt="Vercel Logo" width={150} height={46} />
      <Image src="/RISK.png" alt="Vercel Logo" width={78} height={35} />
    </div> */}

  </div>
);


export default NotFound;
