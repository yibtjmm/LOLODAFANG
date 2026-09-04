import { brand } from '../lib/brand'

export function StudentSocialLinks() {
  return (
    <div aria-label={`${brand.name} 品牌標章`} className="student-social-links student-brand-badge">
      <span className="student-brand-mark">{brand.shortName}</span>
      <span>{brand.name}</span>
    </div>
  )
}
