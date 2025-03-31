import { cn } from '@src/lib/utils'
export const Go = ({ className }: { className?: string }) => {
  return (
    <svg
      width="181"
      height="181"
      viewBox="0 0 181 181"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-5 h-5', className)}
    >
      <path
        d="M156.527 1.239L10.1179 68.8128C-6.77376 76.697 -1.14319 101.473 16.8753 101.473H78.8186V163.416C78.8186 181.435 103.594 187.069 111.479 170.174L179.052 23.7648C184.683 10.2465 170.041 -4.39509 156.527 1.239Z"
        fill="currentColor"
      />
    </svg>
  )
}
