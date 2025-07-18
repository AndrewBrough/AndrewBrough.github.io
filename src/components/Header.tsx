interface HeaderProps {
  currentPage: string
  onPageChange: (page: 'home' | 'about' | 'articles' | 'editor') => void
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a onClick={() => onPageChange('home')} className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
            <li><a onClick={() => onPageChange('about')} className={currentPage === 'about' ? 'active' : ''}>About</a></li>
            <li><a onClick={() => onPageChange('articles')} className={currentPage === 'articles' ? 'active' : ''}>Articles</a></li>
            <li><a onClick={() => onPageChange('editor')} className={currentPage === 'editor' ? 'active' : ''}>Write</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold" onClick={() => onPageChange('home')}>
          Andrew Brough
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a onClick={() => onPageChange('home')} className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
          <li><a onClick={() => onPageChange('about')} className={currentPage === 'about' ? 'active' : ''}>About</a></li>
          <li><a onClick={() => onPageChange('articles')} className={currentPage === 'articles' ? 'active' : ''}>Articles</a></li>
          <li><a onClick={() => onPageChange('editor')} className={currentPage === 'editor' ? 'active' : ''}>Write</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
            <li><a data-set-theme="light">Light</a></li>
            <li><a data-set-theme="dark">Dark</a></li>
            <li><a data-set-theme="cupcake">Cupcake</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}