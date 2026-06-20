'use client';
import { FiPhone } from 'react-icons/fi';

export default function TopBar() {
  return (
    <div className="flex bg-primary-900 text-center text-white text-xs py-2.5 px-4">
      <div className="container-lg flex flex-wrap items-center justify-center sm:justify-between sm:gap-8">
        <p className="font-body tracking-wide text-white/80">
          <span className="text-accent font-semibold">•</span>{' '}
          24/7 Emergency Support · Fast Same-Day Service
        </p>
        <a
          href="tel:923347787553"
          className="flex items-center gap-1.5 text-white font-semibold hover:text-accent transition-colors duration-200"
        >
          <FiPhone size={13} />
          Call Now: +92 334 7787554
        </a>
      </div>
    </div>
  );
}
