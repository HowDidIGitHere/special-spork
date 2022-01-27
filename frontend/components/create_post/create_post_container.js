import { connect } from "react-redux";
import { withRouter } from "react-router";
import { followCommunity, getCommunity, getFollowedCommunities, unfollowCommunity } from "../../actions/community_actions";
import CreatePost from "./create_post";
import { createPost } from '../../actions/post_actions'
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps)=> {
  // let myCommunities = Object.values(state.entities.communities).filter((community) => {
  //   if (community.followed_by_current_user) {
  //     return community;
  //   }
  // });

  if (ownProps.match.params.communityTitle) {
    return {
      community: state.entities.communities[ownProps.match.params.communityTitle],
      myCommunities: Object.values(state.entities.communities)
    };
  } else {
    return {
      myCommunities: Object.values(state.entities.communities)
    };
  }

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getFollowedCommunities: () => dispatch(getFollowedCommunities()),
  getCommunity: () => dispatch(getCommunity(ownProps.match.params.communityTitle)),
  createPost: post => dispatch(createPost(post)),
  follow: f => dispatch(followCommunity(f)),
  unfollow: f => dispatch(unfollowCommunity(f)),
  openModal: type => dispatch(openModal(type))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));