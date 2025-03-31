import { cn } from '@src/lib/utils'
export const Home = ({ className }: { className?: string }) => {
  return (
    <svg
      width="206"
      height="183"
      viewBox="0 0 206 183"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-5 h-5', className)}
    >
      <path
        d="M201.075 103.231H182.137V171.356C182.137 176.408 179.94 182.71 170.81 182.71H125.504V114.585H80.1974V182.71H34.8909C25.7616 182.71 23.5642 176.408 23.5642 171.356V103.231H4.62611C-2.14721 103.231 -0.697403 99.5527 3.94651 94.7385L94.8314 3.54248C97.0401 1.24895 99.9397 0.113541 102.851 0C105.762 0.113541 108.661 1.2376 110.87 3.54248L201.743 94.7272C206.399 99.5527 207.848 103.231 201.075 103.231Z"
        fill="currentColor"
      />
    </svg>
  )
}
