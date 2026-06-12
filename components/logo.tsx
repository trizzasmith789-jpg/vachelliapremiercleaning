import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  width = 120,
  height = 120,
  priority = false,
}: {
  className?: string
  width?: number
  height?: number
  priority?: boolean
}) {
  return (
    <Image
      src="/vachellia-logo.png"
      alt="Vachellia Premier Cleaning"
      width={width}
      height={height}
      priority={priority}
      className={cn('object-contain mix-blend-multiply', className)}
    />
  )
}
