import React from "react"
import { TeamPageTemplate } from "../../templates/team-page"

const TeamPagePreview = ({ entry, getAsset }) => {
  const entryMembers = entry.getIn(["data", "members"])
  const members = entryMembers ? entryMembers.toJS() : []
  const membersWithImages = members.map(member => ({
    ...member,
    image: getAsset(member.image)
  }))

  return (
    <TeamPageTemplate
      title={entry.getIn(["data", "title"])}
      members={membersWithImages}
    />
  )
}
