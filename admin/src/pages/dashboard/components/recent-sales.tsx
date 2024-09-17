import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function RecentSales() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Aarav Patel</p>
          <p className='text-sm text-muted-foreground'>
          aarav.patel@email.com
          </p>
        </div>
        <div className='ml-auto font-medium'>Income Certificate</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/avatars/02.png' alt='Avatar' />
          <AvatarFallback>RS</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Riya Sharma</p>
          <p className='text-sm text-muted-foreground'>riya.sharma@email.com</p>
        </div>
        <div className='ml-auto font-medium'>Caste Certificate</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/03.png' alt='Avatar' />
          <AvatarFallback>VS</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Vihaan Singh</p>
          <p className='text-sm text-muted-foreground'>
          vihaan.singh@email.com
          </p>
        </div>
        <div className='ml-auto font-medium'>Marksheet</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/04.png' alt='Avatar' />
          <AvatarFallback>SG</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Sneha Gupta</p>
          <p className='text-sm text-muted-foreground'>sneha.gupta@email.com</p>
        </div>
        <div className='ml-auto font-medium'>Domicile Certificate</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/05.png' alt='Avatar' />
          <AvatarFallback>PK</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Priya Kumar</p>
          <p className='text-sm text-muted-foreground'>priya.kumar@email.com</p>
        </div>
        <div className='ml-auto font-medium'>Bank Statement</div>
      </div>
    </div>
  )
}
