export const formatItemsGenericCarousel = ({
  item,
  titleKey = '',
  contentKey = '',
  footerKey = '',
  imageKey = '',
}) => ({
  title: item[titleKey],
  content: item[contentKey],
  footer: item[footerKey],
  image: item[imageKey],
});
