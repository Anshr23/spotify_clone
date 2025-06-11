import SignInOAuthButton from './SignInOAuthButton';
import { LayoutDashboardIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SignedOut, UserButton } from '@clerk/clerk-react';
import { useAuthStore } from '@/stores/useAuthStore';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';


const Topbar = () => {
    const {isAdmin} = useAuthStore();
    //console.log({isAdmin});


  return (
    <div className="flex items-center justify-between p-4 sticky top-0 dark:bg-zinc-900/75 backdrop-blur-md z-10">
        <div className="flex gap-2 items-center">
            <img src="spotify.png" alt="spotify" className='size-8' />
            Spotify
        </div>
        <div className="flex items-center gap-4">
            {isAdmin && ( 
                <Link to={"/admin"} className={cn(
                    buttonVariants({ variant: "outline", size: "sm" })
                )}>
                    <LayoutDashboardIcon className="size-4 mr-2" />
                    Admin Dashboard
                </Link>
            )}

            {/* <SignedIn>
                <SignOutButton/>
            </SignedIn> */}

            < SignedOut>
                <SignInOAuthButton/>
            </SignedOut>

            <UserButton/>
        </div>
    </div>
  )
};

export default Topbar;