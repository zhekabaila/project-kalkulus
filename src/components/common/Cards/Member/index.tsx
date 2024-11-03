import Image from 'next/image'

interface MemberCardProps {
  name: string
  npm: string
  instagram: string
  photo: string
}

const MemberCard = ({ data }: { data: MemberCardProps }) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2">
        <div>
          <Image
            src={data.photo}
            width={100}
            height={100}
            alt={data.name}
            className="size-full"
          />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default MemberCard
