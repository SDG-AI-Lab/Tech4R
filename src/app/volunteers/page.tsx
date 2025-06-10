import { Hero } from '@/components/Hero'

export default function VolunteersPage() {
  return (
    <>
      <Hero title={<span className="block max-w-xl">Get Involved As A Volunteer</span>} subtitle="Join a global network supporting communities in crisis." />
      <div className="flex-1 flex items-center justify-center">
        <p>Volunteers</p>
      </div>
    </>
  );
}
