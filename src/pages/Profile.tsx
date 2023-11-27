import { Avatar, Box, Skeleton, Text, Tooltip, VStack } from "@chakra-ui/react";
import { useUserProfile } from "../services/users/hooks";

const Profile = () => {
  const { data, loading } = useUserProfile();

  const formatDateString = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    data && (
      <VStack
        align="flex-start"
        spacing={4}
        height="calc(100vh - 200px)"
        py={10}
      >
        <Tooltip
          label={data?.profile?.fullName}
          openDelay={500}
          bg="neutral.400"
          color="white"
          cursor="pointer"
        >
          <Skeleton isLoaded={!loading}>
            <Avatar
              name={data?.profile.fullName}
              src={data?.profile.avatar || ""}
              size="lg"
              cursor="pointer"
            />
          </Skeleton>
        </Tooltip>
        <Skeleton isLoaded={!loading} display="flex" flexDir="column" gap={4}>
          <Text fontSize="xl" fontWeight="bold">
            {data.profile.fullName}
          </Text>
          <Text fontSize="md" color="gray.500">
            {data.profile.email}
          </Text>
          <Box>
            <Text fontWeight="bold">Created At:</Text>
            <Text>{formatDateString(data.profile.createdAt)}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Updated At:</Text>
            <Text>{formatDateString(data.profile.updatedAt)}</Text>
          </Box>
        </Skeleton>
      </VStack>
    )
  );
};

export default Profile;
