import React from 'react'
import './style.scss'
import CONFIG from '@/config'

const currentYear = new Date().getFullYear()

export default () => {
  return (
    <footer className="global-footer">
      <div>
        Copyright &copy; 2024-{currentYear} {CONFIG.title} -
        <a href="https://github.com/GitHubDeadTree/Campus-ToDo" target="_blank" rel="noopener noreferrer"> wang</a>
      </div>
    </footer>
  )
}
