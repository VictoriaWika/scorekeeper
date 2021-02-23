import './Navigation.css'

export default function Navigation({ pages, activeIndex, onNavigate }) {
  return (
    <nav className="Navigation">
      {pages.map((page, index) => (
        <button
          key={page}
          className={
            index === activeIndex
              ? 'Navigation__active'
              : 'Navigation__inactive'
          }
          onClick={() => onNavigate(index)}
        >
          {page}
        </button>
      ))}
    </nav>
  )
}
