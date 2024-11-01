import Image from 'next/image'

import { cn } from '@/lib/utils'
import { IPlayButtonProps } from '@/types'

import { Button } from './button'

const PlayButton = ({
  children,
  onClick,
  isPlaying = false,
}: IPlayButtonProps) => {
  return (
    <div
      className={cn(
        'flex items-center gap-[26px] absolute z-10 bottom-0 left-0 lg:p-[40px] p-[20px] transition duration-300 cursor-pointer',
        { 'opacity-0': isPlaying },
      )}
    >
      <Button
        variant={'secondary'}
        shape={'circle'}
        className="lg:w-[100px] w-[42px] lg:h-[100px] h-[42px] hover:bg-accentCyan100 hover:scale-105 transition duration-300 group"
        onClick={onClick}
      >
        <Image
          src={`/icons/${isPlaying ? 'pause' : 'play'}.svg`}
          alt={`${isPlaying ? 'pause' : 'play'} icon`}
          width={36}
          height={36}
          className="lg:min-w-[36px] min-w-[14px] lg:h-[36px] h-[14px] transition duration-300"
        />
      </Button>
      {children}
    </div>
  )
}

export default PlayButton
