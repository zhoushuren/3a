import { useWeb3React } from '@pancakeswap/wagmi'
import { getAchievements } from 'state/achievements/helpers'
import { FetchStatus } from 'config/constants/types'
import useSWR, { KeyedMutator } from 'swr'
import { localStorageMiddleware } from 'hooks/useSWRContract'
import useSWRImmutable from 'swr/immutable'
import { getProfile, GetProfileResponse } from './helpers'
import { Profile } from '../types'

export const useProfileForAddress = (
  address: string,
  fetchConfiguration = {
    revalidateIfStale: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  },
) => {
  // const { data, status, mutate, isValidating } = useSWR(
  //   address ? [address, 'profile'] : null,
  //   () => getProfile(address),
  //   fetchConfiguration,
  // )

  // const { profile } = data ?? { profile: null }
  const profile = null
  // return {
  //   profile,
  //   isFetching: status === FetchStatus.Fetching,
  //   isValidating,
  //   refresh: mutate,
  // }
  return {}
}

export const useAchievementsForAddress = (address: string) => {
  const { data, status, mutate } = useSWRImmutable(address ? [address, 'achievements'] : null, () =>
    getAchievements(address),
  )

  return {
    achievements: data || [],
    isFetching: status === FetchStatus.Fetching,
    refresh: mutate,
  }
}

export const useProfile = () => {
  // const { account } = useWeb3React()
  // const { data, status, mutate } = useSWRImmutable(account ? [account, 'profile'] : null, () => getProfile(account), {
  //   use: [localStorageMiddleware],
  // })
  //
  // const { profile, hasRegistered } = data ?? ({ profile: null, hasRegistered: false } as GetProfileResponse)
  //
  // const isLoading = status === FetchStatus.Fetching
  // const isInitialized = status === FetchStatus.Fetched || status === FetchStatus.Failed
  // const hasProfile = isInitialized && hasRegistered
  // const hasActiveProfile = hasProfile && profile?.isActive
  //
  // return { profile, hasProfile, hasActiveProfile, isInitialized, isLoading, refresh: mutate }
  return {}
}
